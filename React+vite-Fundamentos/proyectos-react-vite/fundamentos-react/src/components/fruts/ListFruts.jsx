import ItemFrut from './ItemFrut';

const ListFruts = ({fruts}) => {
  return (
    <ul>
      {fruts.map((frut, index) => (
        // <li key={index}>{frut} - {index}</li>//Sera remplazado
        <ItemFrut key={index} frut={frut} />
      ))}
    </ul>
  );
};
export default ListFruts;
