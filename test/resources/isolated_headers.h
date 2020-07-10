#include <stdint.h>
//#include <stdlib.h>

typedef struct LDKTestStruct {
	const int *hello;
} LDKTestStruct;

/**
 * A reference to a serialized transaction, in (pointer, length) form.
 * This type does *not* own its own memory, so access to it after, eg, the call in which it was
 * provided to you are invalid.
 */
typedef struct LDKTransaction {
   const uint8_t *data;
   uintptr_t datalen;
} LDKTransaction;

/**
 * " An interface to send a transaction to the Bitcoin network."
 */
typedef struct LDKBroadcasterInterface {
   void *this_arg;
   /**
    * " Sends a transaction out to (hopefully) be mined."
    */
   void (*broadcast_transaction)(const void *this_arg, LDKTransaction tx);
} LDKBroadcasterInterface;


// int do_something(LDKTransaction tx, LDKTestStruct *test, LDKBroadcasterInterface *bci);
