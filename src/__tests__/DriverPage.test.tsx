import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TripModalDriver from "../features/Modals/TripModalDriver";

test("Завершение поездки через модальное окно водителя", () => {
  const markAsDoneMock = jest.fn();
  const handleCloseMock = jest.fn();

  render(
    <TripModalDriver open={true} handleClose={handleCloseMock} markAsDone={markAsDoneMock} tripId={1} />
  );

  // Кнопки
  const startButton = screen.getByText("Начать поездку");
  const arriveButton = screen.getByText("На месте");
  const completeButton = screen.getByText("Завершить поездку");

  fireEvent.click(startButton);
  fireEvent.click(arriveButton);
  fireEvent.click(completeButton);

  expect(markAsDoneMock).toHaveBeenCalledWith(1);
  expect(handleCloseMock).toHaveBeenCalled();
});
