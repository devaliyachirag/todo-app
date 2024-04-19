import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import AddButton from "../components/AddButton";
import TaskList from "../components/TaskList";
import dayjs from "dayjs";
interface Name {
  name: string;
  checkStatus: boolean;
  date: string;
  endDate?: string | undefined;
  id: number;
}

const Home = () => {
  let date2 = new Date();
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>(
    dayjs(new Date()).format("MMMM D-YYYY hh:mm")
  );
  const [endDate, setEndDate] = useState<string>(
    dayjs(new Date()).format("MMMM D-YYYY hh:mm")
  );
  const [updateId, setUpdateId] = useState<number>(0);
  const [updateStatus, setUpdateStatus] = useState<boolean>(false);
  const [checkStatus, setCheckStatus] = useState<boolean>(false);
  const [data, setData] = useState<Name[]>([]);
  const [taskId, setTaskId] = useState<number>(Date.now());

  console.log(date2.getSeconds());

  useEffect(() => {
    let info = localStorage.getItem("todoApp");
    if (info) {
      setData(JSON.parse(info));
    }
  }, []);

  const addTask = () => {
    if (!updateStatus) {
      if (name !== "") {
        data.push({
          name: name,
          checkStatus: checkStatus,
          date: date,
          endDate: "-",
          id: taskId,
        });
        setTaskId(Date.now());
        setDate(dayjs(new Date()).format("MMMM D-YYYY hh:mm"));
      }
    } else {
      data[updateId] = {
        name: name,
        checkStatus: checkStatus,
        date: date,
        endDate: checkStatus ? endDate : "-",
        id: taskId,
      };
      setUpdateStatus(false);
      setEndDate(dayjs(new Date()).format("MMMM D-YYYY hh:mm"));
    }
    setCheckStatus(false);
    localStorage.setItem("todoApp", JSON.stringify(data));
    setName("");
  };

  const updateData = (id: number) => {
    setUpdateId(id);
    setUpdateStatus(true);
    setName(data[id].name);
    setCheckStatus(data[id].checkStatus);
  };

  const deleteData = (id: number) => {
    let deleteItem = data.filter((value,index) => {
      return id == index ? null : value;
    });
    setData(deleteItem);
    localStorage.setItem("todoApp", JSON.stringify(deleteItem));
  };

  return (
    <div className="container">
      <Header />  
      <Input
        type="text"
        onchange={(value) => setName(value)}
        value={name}
        className="form-control"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />
      <input
        type="checkbox"
        checked={checkStatus}
        onChange={(e) => setCheckStatus(e.target.checked)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />
      <AddButton color="blue" name="Add Task" onClick={() => addTask()} />
      <TaskList
        onClickDelete={(index) => deleteData(index)}
        onClickUpdate={(index) => updateData(index)}
        data={data}
        onChecked={() => setCheckStatus(checkStatus)}
      />
    </div>
  );
};

export default Home;
