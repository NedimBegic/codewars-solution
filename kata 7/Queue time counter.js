/* You managed to send your friend to queue for tickets in your stead, but there is a catch: he will get there only if you tell him how much that is going to take. And everybody can only take one ticket at a time, then they go back in the last position of the queue if they need more (or go home if they are fine).

Each ticket takes one minutes to emit, the queue is well disciplined, Brit-style, and so it moves smoothly, with no waste of time.

You will be given an array/list/vector with all the people queuing and the initial position of your buddy, so for example, knowing that your friend is in the third position (that we will consider equal to the index, 2 (3 in COBOL): he is the guy that wants 3 tickets!) and the initial queue is [2, 5, 3, 4, 6].

The first dude gets his ticket and the queue goes now like this [5, 3, 4, 6, 1], then [3, 4, 6, 1, 4] and so on. In the end, our buddy will be queuing for 12 minutes, true story!

Build a function to compute it, resting assured that only positive integers are going to be there and you will be always given a valid index; but we also want to go to pretty popular events, so be ready for big queues with people getting plenty of tickets. */
function queue(queuers, pos) {
  let time = 0;
  let totalTickets = queuers[pos];

  while (totalTickets > 0) {
    // for our friend
    if (pos === 0) {
      // decrease ticket number
      totalTickets--;

      // check if there are more tickets to buy
      if (totalTickets > 0) {
        // send friend to the back
        queuers.push(queuers[pos]);
        pos = queuers.length - 1;
        // make room for next
        queuers.shift();
      }
    }
    // for other people
    let buyer = queuers[0];
    // he buys the ticket
    buyer--;

    // check if he has more tickets to buy
    if (buyer > 0) {
      queuers.push(buyer);
    }

    // make room for next buyer
    queuers.shift();
    // decrease the position of our friend
    pos = pos === 0 ? queuers.length - 1 : pos - 1;
    // the time needed for this is one minute;
    time++;
  }
  return time;
}
