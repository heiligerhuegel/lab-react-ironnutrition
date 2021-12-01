import { Card, Col, Divider, Button } from "antd";

function FoodBox({ food, handleDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 320, margin: 10 }}>
        <img src={food.image} height={60} alt="This is a Thing" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b>
          kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            handleDelete(food.name);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
