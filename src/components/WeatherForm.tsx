import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/servers';
import { useDispatch, useStore } from 'react-redux';
import { type_storm, severity, date_happened, damage_cost} from "../redux/slices/rootSlice"

// interfaces
interface WeatherFormProps {
  id?: string []
}

const WeatherForm = (props:WeatherFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  // function that handles form submission for adding or updating a car record.
  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(data)
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
      event.target.reset();
    } else {
    // Use dispatch to update the state in the store
   dispatch(type_storm(data.type_storm));
   dispatch(severity(data.severity));
   dispatch(date_happened(data.date_happened));
   dispatch(damage_cost(data.damage_cost));
      
      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }
  return (  
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register('type_storm')} name='type_storm' placeholder="Type Of Storm"/>
        </div>
        <div>
          <Input {...register('severity')} name='severity' placeholder="Severity Of Storm"/>
        </div>
        <div>
          <Input {...register('date_happened')} name='date_happened' placeholder="Date Of Storm"/>
        </div>
        <div>
          <Input {...register('damage_cost')} name='damage_cost' placeholder="Cost Of Storm Damage"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default WeatherForm