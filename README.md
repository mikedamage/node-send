node-send
=========

_A thing that sends other things over TCP_

**node-send** is a simple client/server file transfer application that sends files in the clear over TCP. I think it'll be faster than `scp` due to the lack of encryption, but I honestly don't know yet.

Usage
-----

Start a server process on the target machine:

```
ns-receive [--dir=TARGET_DIR] [--port=PORT]
```

Then call `ns-send` on the client machine:

```
ns-send --host=HOST [--port=PORT] FILE [FILE...]
```

You'll see a pretty progress bar as the bits wend their way through the tubes.
