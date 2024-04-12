import { client } from "@devrev/typescript-sdk";

export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const API_BASE = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: API_BASE,
    token: devrevPAT,
  })
  const work_id = event.payload.work_created.work.id;
  const workItem = await devrevSDK.worksGet({id: work_id});
  console.info(work_id);
  var response = null;
  if (workItem.data.work.type == "issue")
  {
    console.info("Issue found");
    var data_1 = workItem.data;
    data_1.work.stage = {"name": "Completed"};
    response = devrevSDK.worksUpdate({data: data_1} as any);
  }
  return response;
}

export const run = async (events: any[]) => {
  console.info('events', JSON.stringify(events), '\n\n\n');
  for (let event of events) {
    const resp = await handleEvent(event);
  }
};

export default run;