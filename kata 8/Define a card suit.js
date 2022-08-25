/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */
function defineSuit(card) {
    switch (true) {
        case card[card.length-1] == "♣":
        return "clubs";
        case card[card.length-1] == "♦":
        return "diamonds";
        case card[card.length-1] == "♥":
        return "hearts";
        case card[card.length-1] == "♠":
        return "spades";
    }
  }