using System;

namespace Source.Optional
{
    [Serializable]
    public struct Option<T>
    {
        public bool IsSome;
        public T Value;

        public static Option<T> None => default(Source.Optional.Option<T>);
        
        public static Option<T> Some(T value)
        {
            return new Option<T> 
            {
                IsSome = true,
                Value = value,
            };
        }
    }
}