using System;
using System.Collections.Generic;

namespace plants.Data
{
     public static class Data
     {
         public static List<plant> plants => allPlants;

      
        static List<plant> allPlants = new List<plant>(){

             new plant(){
                name="Aloe Vera",
                Id=1,
                lastWatered=DateTime.Now,
                status="need water"
 
             },

             new plant(){
                name="Boston Ivy",
                Id=2,
                lastWatered=DateTime.Now,
                status="watered"
             },
             new plant(){
                 name="Chocolate Drop Sedum",
                 Id=3,
                lastWatered=DateTime.Now,
                status="watered"

             },
              new plant(){
                 name="Easter Lily",
                 Id=4,
                lastWatered=DateTime.Now,
                status="watered"

             },
              new plant(){
                 name="English Lavender Plants",
                 Id=5,
                lastWatered=DateTime.Now,
                status="need watered"

             },
         };
     }

}