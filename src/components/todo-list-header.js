import React from 'react';


export default class TodosListHeader extends React.Component{
  
    render(){
        return (
            <thead>
                <tr>
                    <th className="text-center">Task</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            )
    }
}