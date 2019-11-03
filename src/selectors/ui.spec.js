import {uiSelector} from "./ui";

describe("uiSelector", () => {
    it("it should get showConfiramtion values from state", () => {
        const ui = {
            showedDetailedBook: false,
            showConfiramtion: false
        }

        expect(uiSelector.showConfiramtionSelector({ui})).toBe(ui.showConfiramtion);

    });
    it("it should get showedDetailedBook from state", () => {
        const ui = {
            showedDetailedBook: false,
            showConfiramtion: false
        }

        expect(uiSelector.showDetailedBookSelector({ui})).toBe(ui.showedDetailedBook);
    });

});