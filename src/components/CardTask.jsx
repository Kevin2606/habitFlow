import { Checkbox } from "@nextui-org/react";
import PropTypes from "prop-types";

const SVGUpdate = ({ size }) => {
    return (
        <svg
            className="icon icon-tabler icon-tabler-edit"
            width={size}
            height={size}
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M7 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 00-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
        </svg>
    );
};

SVGUpdate.propTypes = {
    size: PropTypes.number.isRequired,
};

export const CardTask = ({nameTask}) => {
    return (
        <div className="flex flex-row w-full justify-center items-center border py-3 ">
            <Checkbox
                label="Tarea"
                color="success"
                radius="full"
                lineThrough
                onChange={() => {}}
            >
                <h4 className="w-64 h-min line-clamp-1">{nameTask}</h4>
            </Checkbox>
        </div>
    );
};
CardTask.propTypes = {
    nameTask: PropTypes.string.isRequired,
};