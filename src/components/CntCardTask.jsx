import PropTypes from "prop-types";

import { CardTask } from "./CardTask";

export const CntCardTask = ({ date = "DD/MM/AAAA", tasks = [] }) => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="w-full text-right pr-5 py-2 font-light">{date}</h3>
            {tasks.map((task) => (
                <CardTask key={task.nameTask} {...task} />
            ))}
        </div>
    );
};

CntCardTask.propTypes = {
    date: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
};
