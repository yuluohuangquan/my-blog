async function testAsync() {
  return "Hello async";
}

function getAwait() {
  return "Hello await";
}

async function test() {
  const res1 = await testAsync();
  const res2 = await getAwait();
  console.log(res1, res2);
}

test();
