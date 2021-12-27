export default function TodoItem(props) {
  // console.log(props.element)
  let type = "";
  const handleClick=(e)=>{
    
    e.preventDefault()
    let item = 
    {
      taskName: e.target.taskName.value,
      status: e.target.status.value,
      changeType : type,
    };
    console.log(type)
    props.onChangeStatus(item)
  }

  return( 
  <div className="border">
    <form onSubmit={handleClick}>
      <input onChange={()=>{}} hidden name="taskName" value={props.element.taskName}></input>
      <input onChange={()=>{}} hidden name="status" value={props.element.status}></input>
      {props.element.status === 0 ? "":<button name="changeType" value="dec" onClick={()=>{type="dec"}} type="submit" >{"<"}</button>}
      {props.element.taskName}
      {props.element.status === 2 ? "":<button name="changeType" value="inc" onClick={()=>{type="inc"}} type="submit">{">"}</button>}
    </form>
    </div>);
}
