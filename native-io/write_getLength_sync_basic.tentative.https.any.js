// META: title=Synchronous NativeIO API: getLength reports written bytes.
// META: global=dedicatedworker
// META: script=resources/support.js

'use strict';

test(testCase => {
  const writtenBytes = [64, 65, 66, 67];
  const file = createFileSync(testCase, 'test_file', [64, 65, 66, 67]);

  const length = file.getLength();
  assert_equals(length, writtenBytes.length,
    'NativeIOFileSync.getLength() should return the number of' +
    ' bytes in the file.');
}, 'NativeIOFileSync.getLength returns the number bytes written by' +
' NativeIOFileSync.write');
