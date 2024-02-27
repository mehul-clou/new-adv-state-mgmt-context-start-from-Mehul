import { createContext } from "react";

const CardContext = createContext({ items: [], addItemToCart: () => {} });

export default CardContext;
