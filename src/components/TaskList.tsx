import React, { FC } from "react";
import AddButton from "./AddButton";
import { updateLanguageServiceSourceFile } from "typescript";
import CheckBox from "./CheckBox";
export interface Data {
  name: string;
  checkStatus: boolean;
  date: string | number;
  endDate?: string | undefined;
  id: number;
}
export interface TaskListProps {
  data: Data[];

  onClickUpdate: (index: number) => void;
  onClickDelete: (index: number) => void;
  onChecked: (checkStatus: boolean) => void;
}

const TaskList: FC<TaskListProps> = ({
  data,
  onClickUpdate,
  onClickDelete,
}) => {
  console.log(data);
  return (
    <table className="table ">
      <thead>
        <tr>
          <th>Status</th>
          <th>Task</th>
          <th>Start date</th>
          <th>Complete date</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => {
          return (
            <tr>
              <CheckBox className="checkbox" checked={value.checkStatus} />
              <td>{value.name}</td>
              <td>{value.date}</td>
              <td>{value.endDate}</td>
              <td>
                <AddButton
                  color="red"
                  onClick={() => onClickDelete(index)}
                  name="Delete"
                />
              </td>
              <td>
                <AddButton
                  color="green"
                  onClick={() => onClickUpdate(index)}
                  name="Update"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskList;
