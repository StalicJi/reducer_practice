import React from 'react'
import Table from './Table'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {
    const { config, data } = props;
    const { sortBy, sortedData, sortOrder, setDortColumn } = useSort(data, config)

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header:() => 
            <th className='cursor-pointer hover:bg-gray-100' onClick={() => setDortColumn(column.label)} >
                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })


    return (
            <Table {...props} data={sortedData} config={updatedConfig}/>
    )

}

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div>
            <GoTriangleUp/>
            <GoTriangleDown/>
        </div>
    }

    if (sortOrder === null ) {
        return <div>
            <GoTriangleUp/>
            <GoTriangleDown/>
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoTriangleUp/>
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoTriangleDown/>
        </div>
    }
}

export default SortableTable
