import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function Cards() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const projectItems = useSelector((state) => state.projectItems);

  const filteredCards = projectItems.filter((item) => {
    return item.title
      .concat(item.description)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div className="main__cards__container">
      {filteredCards.map((arrayItem) => {
        return (
          <article key={arrayItem.title} className="main__cards__article">
            <a className="main__cards__article__item" href="#">
              <div className="main__cards__article__item__icon">
                <img
                  className="main__cards__article__item__image"
                  src={arrayItem.imgSrc}
                  alt="card image"
                />
              </div>
              <div className="main__cards__article__item__details">
                <h4 className="main__cards__article__item__details__header">
                  {arrayItem.title}
                </h4>
                <p className="main__cards__article__item__details__text">
                  {arrayItem.description}
                </p>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
