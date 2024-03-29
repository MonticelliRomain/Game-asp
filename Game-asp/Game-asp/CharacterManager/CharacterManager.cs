﻿using System;
using System.Collections.Generic;

namespace Game_asp

{
    public sealed class CharacterManager
    {
        private Dictionary<string, Type> characters;
        private static CharacterManager instance = null;

        public object GetInstance(string strFullyQualifiedName)
        {
            Type t = Type.GetType(strFullyQualifiedName);
            return Activator.CreateInstance(t);
        }

        public CharacterManager()
        {
            characters = new Dictionary<string, Type>();
        }

        public static CharacterManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CharacterManager();
                }
                return instance;
            }
        }

        public void Register<T>(string name) where T : Character
        {
            characters.Add(name, typeof(T));
        }

        public Dictionary<string, Type> GetMap()
        {
            return characters;
        }
    }
}
