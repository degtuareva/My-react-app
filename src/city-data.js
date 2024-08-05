const URl='city-list.json';

export const getCityList=async()=>{
    try{
    const response=await fetch(URl);
    return response.ok?response.json():[];
    }catch(e){
    return[];

    }
};