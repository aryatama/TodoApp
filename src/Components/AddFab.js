import React from 'react'
import { Fab, Icon } from 'native-base';


const AddFab = (props) => {
    return (
        <Fab
            style={{ backgroundColor: 'white' }}
            position="bottomRight"
            onPress={() => props.handleAddModal()}>
            <Icon name="md-add" style={{color:"#1488CC"}} />
        </Fab>
    )
}

export default AddFab
