import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModalComponent from "../features/Modals/PassengerPageModal";

test("Добавление поездки через модальное окно пассажира", async () => {
  const setTripsMock = jest.fn();

  render(
    <ModalComponent
      trips={[]}
      setTrips={setTripsMock}
      open={true}
      setOpen={() => {}}
    />
  );

  // Работа с полем "Откуда"
  const fromInput = screen.getByRole("combobox", { name: "Откуда" });
  fireEvent.change(fromInput, { target: { value: "Тверская улица" } });

  // Работа с полем "Куда"
  const toInput = screen.getByRole("textbox", { name: "Куда" });
  fireEvent.change(toInput, { target: { value: "Красная площадь" } });

  // Выбор тарифа
  const tariffSelect = screen.getByTestId("tariff_select");
  fireEvent.mouseDown(tariffSelect);
  fireEvent.click(screen.getByText("Комфорт"));

  // Добавление поездки
  const addButton = screen.getByText("Добавить");
  fireEvent.click(addButton);

  await waitFor(() =>
    expect(setTripsMock).toHaveBeenCalledWith([
      expect.objectContaining({
        from: "Тверская улица",
        to: "Красная площадь",
        tariff: "Комфорт",
      }),
    ])
  );
});
