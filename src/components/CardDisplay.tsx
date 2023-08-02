import * as PropTypes from 'prop-types';
export default function CardDisplay({ card } : { card: any }) {
  interface ICardoP{
    name: string,
    card_images: any[],
    attribute: string,
    level: number,
    atk: number,
    def: number,
    type: string,
    archetype: string
  }
  type PropTypesMap = PropTypes.ValidationMap<ICardoP>;
  CardDisplay.prototype = {
    card: PropTypes.shape({
      name: PropTypes.string.isRequired,
      card_images: PropTypes.array.isRequired,
      attribute: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      atk: PropTypes.number.isRequired,
      def: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      archetype: PropTypes.string.isRequired
    }).isRequired
  } as PropTypesMap;
  let cardDex = [];
  cardDex.push(card);

  // setup some validation for the card prop
  const loaded = () => {
    return (
        <p>
        {
          cardDex = [card].map((card) => (
            <div className="card">
              <h1>{card.name}</h1>
              <img src={card.card_images[0].image_url} />
              {card.card_images[1] ? <img src={card.card_images[1].image_url} /> : null}
              {card.card_images[2] ? <img src={card.card_images[2].image_url} /> : null}
              {card.card_images[3] ? <img src={card.card_images[3].image_url} /> : null}
              {card.card_images[4] ? <img src={card.card_images[4].image_url} /> : null}
              {card.card_images[5] ? <img src={card.card_images[5].image_url} /> : null}
              <h3>Attribute: {card.attribute}</h3>
              <h3>Level: {card.level}</h3>
              <h3>Attack: {card.atk}</h3>
              <h3>Defense: {card.def}</h3>
              <h3>Type: {card.type}</h3>
              <h3>Archetype: {card.archetype}</h3>
            </div>
          ))
        }
      </p>
    )
  }
  const loading = () => {
    return <h4>Loading...</h4>
  }
  return ( card ? loaded() : loading())
}