import { setup, createActor, assign } from 'xstate';

export const machine = setup({
  /* ... */
}).createMachine({
  id: 'toggle',
  initial: 'active',
  context: { count: 0 },
  states: {
    active: {
      entry: assign({
        count: ({ context }) => context.count + 1,
      }),
      on: {
        toggle: { target: 'inactive' },
      },
    },
    inactive: {
      on: {
        toggle: { target: 'active' },
      },
    },
  },
});

// const actor = createActor(machine);
// actor.subscribe((snapshot) => {
//   console.log(snapshot.value);
// });

// actor.start();
// // logs 'active' with context { count: 1 }

// actor.send({ type: 'toggle' });
// // logs 'inactive' with context { count: 1 }
// actor.send({ type: 'toggle' });
// // logs 'active' with context { count: 2 }
// actor.send({ type: 'toggle' });
// // logs 'inactive' with context { count: 2 }



