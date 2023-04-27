
import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import { server_calls } from '../api/servers';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/fetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID',width: 90, hide: true },
    { field: 'type_storm', headerName: 'Type Of Storm', flex: 1 },
    { field: 'severity', headerName: 'Severity Of Storm', flex: 1 },
    { field: 'date_happened', headerName: 'Date Of Storm', flex: 1 },
    { field: 'damage_cost', headerName: 'Damage Cost', flex: 2 },
  ];

  function DataTable() {
    const [open, setOpen] = useState(false);
    const {stormData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<any>([]);
  
    const handleOpen = () => {
      setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
    };
  
    const deleteData = async () => {
      server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection model: ${selectionModel}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  
    return (
      <>
        <Modal
            id = {selectionModel}
            open = {open}
            onClose = {handleClose}
        />
        <div className="flex flex-row">
          <div>
            <Button
              className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
              onClick={() => handleOpen()}>New Storm</Button>
          </div>
          <Button
            onClick={handleOpen}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}">Update</Button>
          <Button
            onClick={deleteData}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}">Delete</Button>
        </div>
        
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">WeatherMania</h2>
            <DataGrid 
            rows={stormData} 
            columns={columns} 
            rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
            setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable