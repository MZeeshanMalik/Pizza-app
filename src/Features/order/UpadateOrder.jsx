import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder as updateOrders } from '../../services/apiRestaurant';
// eslint-disable-next-line react/prop-types
function UpadateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpadateOrder;

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrders(params.orderId, data);
  return null;
}
