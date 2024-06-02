import { traerChiste } from '../api';


test('debe devolver un objeto de chiste correctamente', async () => {
  const chiste = await traerChiste();
  expect(chiste.error).toBe(false);
});