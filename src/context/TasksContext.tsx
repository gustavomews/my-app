import {createContext} from 'react';

export interface ITasksContext {
  id: string;
  title: string;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);
