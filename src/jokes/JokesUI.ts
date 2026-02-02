//Responsibility: UI component responsible for rendering jokes. Handles HOW a joke is displayed (loading state, text update), but does not know WHEN it should be rendered or WHERE the data comes from. Knows nothing of APIs, nothing of TYPES, only consumes STRING from jk manager.

import { JokesManager } from "./JokesManager"; // .js necessary when not in a Vite project for compiled files' modules to find each other

export class JokesUI {
    private manager = new JokesManager();

    private jokeElement: HTMLParagraphElement;
    private button: HTMLButtonElement;
    private reportElement: HTMLDivElement;
    private scoreSelect: HTMLSelectElement;
    private clearScoreBtn: HTMLButtonElement;
    private showScoreBtn: HTMLButtonElement;
    private scoreQuestion: HTMLLegendElement;

    private anyJoke = false;

    constructor(jokeElement: HTMLParagraphElement, 
        button: HTMLButtonElement, reportElement: HTMLDivElement, scoreSelect:HTMLSelectElement, clearScoreBtn: HTMLButtonElement, showScoreBtn: HTMLButtonElement,
        scoreQuestion: HTMLLegendElement,
    ) { //dom element that will update
        this.jokeElement = jokeElement;
        this.button = button;
        this.reportElement = reportElement;
        this.scoreSelect = scoreSelect;
        this.clearScoreBtn = clearScoreBtn;
        this.showScoreBtn = showScoreBtn;
        this.scoreQuestion = scoreQuestion;

        this.button.textContent = "Hit me!"

        this.hideBtns();
    }

    async renderJoke(): Promise<void> {
        //Clear UI before loading new jk
        this.clearReportUI();

        this.jokeElement.textContent = 'Loading...';
        const joke = await this.manager.getJoke();
        this.jokeElement.textContent = joke;

        if(!this.anyJoke) {
            this.button.textContent = "Next joke";
            this.anyJoke = true;
            this.showBtns();
        }
    }

    attachScoreSelect():void {
        //internal UI interactions --> score btns, translates clicks into num values, delivers to manager
        this.scoreSelect.addEventListener("change", () => {
            const value = this.scoreSelect.value;
            
            if(value === "1" || value === "2" || value === "3") {
                this.manager.rateCurrentJoke(Number(value) as 1 | 2 | 3)
            }
        });

        this.clearScoreBtn.addEventListener('click', () => {
            this.manager.clearCurrentScore();
            this.scoreSelect.value = "";
            this.reportElement.textContent = "Score successfully deleted."
        });

        this.showScoreBtn.addEventListener('click', () => {
            const report: string = this.renderReport();
            this.reportElement.innerHTML = report;
        });
    }

    renderReport():string {
        const report = this.manager.showReport();
        const emptyReport = (report.length === 0);

        if (emptyReport) return `There are no rated jokes`;

        const printReport = report.map((jkInput, index) =>
        `<p>
        ${index + 1}. ${jkInput.joke}<br>Score: ${jkInput.score}<br>Date: ${new Date(jkInput.date).toLocaleString()}
        </p>`).join("");
        
        return printReport;
    }

    clearReportUI(): void {
        this.scoreSelect.value="";
        this.reportElement.textContent = "";
    }

    private hideBtns():void {
        this.scoreSelect.style.display = "none";
        this.clearScoreBtn.style.display = "none";
        this.showScoreBtn.style.display = "none";
        this.scoreQuestion.style.display = "none";
    }

    private showBtns():void {
        this.scoreSelect.style.display = "inline-block";
        this.clearScoreBtn.style.display = "inline-block";
        this.showScoreBtn.style.display = "inline-block";
        this.scoreQuestion.style.display = "inline-block";
    }
}