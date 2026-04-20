using System;
using UnityEngine;
using UnityEngine.Pool;
using Object = UnityEngine.Object;

namespace Source.Pooling
{
    public class MonoPool<T> : ObjectPool<T>
        where T : Component, new()
    {
        public MonoPool(
            Func<T> factory,
            Action<T> onGet = null, 
            Action<T> onRelease = null, 
            Action<T> onDestroy = null, 
            bool collectionCheck = true, 
            int defaultCapacity = 1, 
            int maxSize = 10000) 
            : base(factory,
                instance => 
                {
                    instance.gameObject.SetActive(true);
                    instance.gameObject.hideFlags = HideFlags.None;
                    onGet?.Invoke(instance);
                },
                instance => 
                {
                    instance.gameObject.SetActive(false);
                    instance.gameObject.hideFlags = HideFlags.HideInHierarchy;
                    onRelease?.Invoke(instance);
                }, 
                onDestroy,
                collectionCheck,
                defaultCapacity,
                maxSize)
        { }
        
        public MonoPool(
            T prefab, 
            Action<T> onGet = null, 
            Action<T> onRelease = null, 
            Action<T> onDestroy = null, 
            bool collectionCheck = true, 
            int defaultCapacity = 1, 
            int maxSize = 10000) : 
            this(
                () => Object.Instantiate(prefab),
                onGet,
                onRelease,
                onDestroy,
                collectionCheck,
                defaultCapacity,
                maxSize)
        { }
    }
}