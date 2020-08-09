import {useState,useCallback}  from'react'

export const useApi = () => {
    const[loading,setLoading] =useState(false)


    const api = useCallback(async (url, method ='GET', body = null, headers ={}) => {
        setLoading(true)
        try {
            //для отправки корректного тела запроса
            if(body){
                body = JSON.stringify(body)
                headers['Content-type'] ='application/json'
            }
            const response = await fetch(url,{method, body, headers})
            const data = await response.json()
            console.log(data)
            if (!response.ok){
                throw new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            throw e

        }
    },[])



    return {loading, api}
}