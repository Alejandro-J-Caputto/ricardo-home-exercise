import { SearchArticle } from "../../types/response.types";

const SavedItems: React.FC<{
  theme:boolean;
  itemsContent: SearchArticle;
  onSelect: (id: string, article: SearchArticle) => void;
}> = (props) => {
  //TODO: Format date
  const { id, title, buyNowPrice, endDate, imageUrl } = props.itemsContent;
  return (
    <li className={`marked-item ${props.theme && 'dark'}`} data-id={id}>
      <div className="marked-item__img">
        <img src={imageUrl} alt="marked pic" />
      </div>
      <div className="marked-item__title">
        <h2>{title}</h2>
      </div>
      <div className="marked-item__date">
        <h3>STATUS</h3>
        <p>date: {endDate}</p>
      </div>
      <div className="marked-item__price">
        <h3>PRICE</h3>
        <p>{!buyNowPrice ? "Keine Preis" : buyNowPrice}</p>
      </div>
      <div className="marked-item__unselect">
        <i
          className="fas fa-flag red"
          onClick={() => props.onSelect(`${id}`, { ...props.itemsContent })}
        ></i>
      </div>
    </li>
  );
};

export default SavedItems;
