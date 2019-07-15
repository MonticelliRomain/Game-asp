using System.Collections.Generic;
using System;

namespace Game_asp
{
    public sealed class GameManager
    {
        private List<Game> games;
        private static GameManager instance = null;

        public object GetInstance(string strFullyQualifiedName)
        {
            Type t = Type.GetType(strFullyQualifiedName);
            return Activator.CreateInstance(t);
        }

        public GameManager()
        {
            games = new List<Game>();
        }

        public static GameManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new GameManager();
                }
                return instance;
            }
        }

        public int AddGame(Game toAdd)
        {
            games.Add(toAdd);
            return games.IndexOf(toAdd);
        }

        public List<Game> GetGames()
        {
            return games;
        }
    }
}
