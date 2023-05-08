import { useEffect, useState } from "react";
import supabase from "../data/dataUser";

const Dashboard = () => {

    const [data2, setData2] = useState([]);
    
    useEffect(() => {
      getData2();
    }, []);

    async function getData2(){
      const data = await supabase.from("dataUser").select();
      console.log(data.data);
      setData2(data.data);
    }

    return (
      <>
        <ul className="text-white">
          {data2.map((data) => (
            <li key={data.id}>{data.username}</li>
          ))}
        </ul>
        <div className="font-bold text-white">
            {localStorage.getItem("username")}
        </div>
      </>
    )
}

export default Dashboard;