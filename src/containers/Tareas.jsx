//import { useState, useRef } from "react";
import { CntCardTask } from "../components/CntCardTask";
const SVGArrow = () => {
    return (
        <svg
            width="100%"
            height="100%"
            className="icon icon-tabler icon-tabler-arrow-big-up w-fit"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M9 20v-8H5.414a1 1 0 01-.707-1.707l6.586-6.586a1 1 0 011.414 0l6.586 6.586A1 1 0 0118.586 12H15v8a1 1 0 01-1 1h-4a1 1 0 01-1-1z" />
        </svg>
    );
};

const SVGCalendar = () => {
    return (
        <svg
            width="100%"
            height="100%"
            className="icon icon-tabler icon-tabler-calendar-event"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2zM16 3v4M8 3v4M4 11h16" />
            <path d="M8 15h2v2H8z" />
        </svg>
    );
};

const dataTasks = [
    {
        date: "DD/MM/AAAA",
        tasks: [
            {
                nameTask: "Tarea 1",
            },
            {
                nameTask: "Tarea 2",
            },
            {
                nameTask: "Tarea 3",
            },
        ],
    },
    {
        date: "DD/MM/AAAA",
        tasks: [
            {
                nameTask: "Tarea 1",
            },
            {
                nameTask: "Tarea 2",
            },
            {
                nameTask: "Tarea 3",
            },
        ],
    },
    {
        date: "DD/MM/AAAA",
        tasks: [
            {
                nameTask: "Tarea 1",
            },
            {
                nameTask: "Tarea 2",
            },
            {
                nameTask: "Tarea 3",
            },
        ],
    },

];

export const Tareas = () => {
    //TODO: Implementar el componente de calendario
    //const refCalendar = useRef(null);
    /*     const refInput = useRef(null);
    const [dataTasks, setDataTasks] = useState(dataTasksObject);
    const [newTask, setNewTask] = useState("");
    const handlerNewTask = (nameTask) => {
        if (nameTask === "") return;
    }; */
/*     const handlerCalendar = () => {
        refCalendar.current.focus();
        refCalendar.current.click();
        
    }; */

    return (
        <div className="h-screen flex flex-col gap-2">
            <h1 className="text-center font-medium text-4xl py-6">Tareas</h1>
            <div className="w-full flex-1 flex flex-col gap-5 overflow-y-scroll bg-[#eee]">
                {dataTasks.map((dataTask) => (
                    <CntCardTask key={dataTask.date} {...dataTask} />
                ))}
            </div>
            <div className="flex flex-row items-center p-3 gap-1">
                <input
                    className="flex-1 p-2 bg-[#eee] rounded-md"
                    placeholder="Tarea nueva"
                    /* ref={refInput} */
                />
                <div className="w-32" >
                    <SVGCalendar />
                </div>
                <div
                    className="w-32"
                    /* onClick={() => handlerNewTask(refInput.current.value)} */
                >
                    <SVGArrow />
                </div>
            </div>
        </div>
    );
};
