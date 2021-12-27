export default function TodoList(props) {
  const { onClick, list } = props;
  // console.log(list);

  const renderList = () => {
    return list.map((l, key) => {
          return (
            <li key={key}>
              <button value={key} onClick={onClick}>
                {l.name}
              </button>
            </li>
          );
        });
  };

  return (
    <div className="border">
      <ul>{renderList()}</ul>
    </div>
  );
}
