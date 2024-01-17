import { isEqualListNode } from "./structures/ListNode";

expect.extend({
  toBeEqualListNode(received, expected) {
    const pass = isEqualListNode(received, expected);
    if (pass) {
      return {
        message: () =>
          `Expected nodes to be equal`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Expected nodes not to be equal`,
        pass: false,
      };
    }
  },
});