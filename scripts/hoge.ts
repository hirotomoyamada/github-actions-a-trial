import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

const main = async () => {
  const data = {
    hoe: 'This is hoge.',
  };

  const json = JSON.stringify(data);

  await mkdir(path.join(process.cwd(), '.hoge'), { recursive: true });

  await Promise.all(
    Array(10)
      .fill(0)
      .map(async (_, index) => {
        await writeFile(path.join(process.cwd(), '.hoge', `hoge-${index + 1}.json`), json);
      }),
  );
};

main();
