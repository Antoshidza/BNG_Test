using System;
using System.Collections.Generic;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Source.Pooling
{
    public class MonoPool<T>
        where T : Component, new()
    {
        private readonly Func<T> _factory;
        private readonly Action<T> _onGet;
        private readonly Action<T> _onRelease;
        private readonly Action<T> _onDestroy;
        private readonly Stack<T> _instances;
        private readonly bool _collectionCheck;
        private readonly int _maxSize;

        public MonoPool(
            Func<T> factory,
            Action<T> onGet = null,
            Action<T> onRelease = null,
            Action<T> onDestroy = null,
            bool collectionCheck = true,
            int defaultCapacity = 1,
            int maxSize = 10000)
        {
            _factory = factory;
            _onGet = onGet;
            _onRelease = onRelease;
            _onDestroy = onDestroy;
            _collectionCheck = collectionCheck;
            _maxSize = maxSize;
            _instances = new Stack<T>(defaultCapacity);
        }

        public MonoPool(
            T prefab,
            Action<T> onGet = null,
            Action<T> onRelease = null,
            Action<T> onDestroy = null,
            bool collectionCheck = true,
            int defaultCapacity = 1,
            int maxSize = 10000)
            : this(
                () => Object.Instantiate(prefab),
                onGet,
                onRelease,
                onDestroy,
                collectionCheck,
                defaultCapacity,
                maxSize)
        {
        }

        public T Get()
        {
            T instance = _instances.Count > 0 ? _instances.Pop() : _factory();
            instance.gameObject.SetActive(true);
            instance.gameObject.hideFlags = HideFlags.None;
            _onGet?.Invoke(instance);
            return instance;
        }

        public void Release(T instance)
        {
            if (_collectionCheck && _instances.Contains(instance))
            {
                throw new InvalidOperationException("Trying to release an instance that is already in the pool.");
            }

            instance.gameObject.SetActive(false);
            instance.gameObject.hideFlags = HideFlags.HideInHierarchy;
            _onRelease?.Invoke(instance);

            if (_instances.Count < _maxSize)
            {
                _instances.Push(instance);
                return;
            }

            _onDestroy?.Invoke(instance);

            if (Application.isPlaying)
                Object.Destroy(instance.gameObject);
            else
                Object.DestroyImmediate(instance.gameObject);
        }
    }
}
