import { Card } from '../Card';
import { Product } from '../../types/Product';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

interface Props{
  product: Product
}

export const ProductListRow = ({ product }: Props) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
      }}
    >
      <Thumbnail description={product.description} image={product.image} width={100} />
      <Link key={product.id} to={`${product.id}`}>
        {product.title}
      </Link>
    </Card>
  );
};
