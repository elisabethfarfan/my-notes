import React, {useEffect, useState } from 'react'

export function useLocalStorage(itemName, initialValue){

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
  
    const [item, setItem] = useState(initialValue);
  
      useEffect(()=>{
        setTimeout(()=>{
         try {
  
          const localStorageItem = localStorage.getItem(itemName)
          let parseItem;
      
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseItem = []
          }else{
            parseItem = JSON.parse(localStorageItem)
          }
  
          setItem(parseItem)
          setLoading(false)
  
         } catch (error) {
  
          setError(error)
          
         }
        },1000)
      })
  
     
  
  
      const saveItem = (newItem) =>{
        try {
          const stringifiedNotes = JSON.stringify(newItem)
          localStorage.setItem(itemName, stringifiedNotes)
          setItem(newItem)
        } catch (error) {
          setError(error)
          
        }
      }
  
      return {item, saveItem, loading, error}
  
  }
