export function setCollegeYear(collegeYearElement: HTMLElement | null): void {
    if (!collegeYearElement) return;
    const currentDate = new Date();
    const startYear = 2022;
    const startMonthIndex = 8;
    let collegeYear = currentDate.getFullYear() - startYear;
    const displayText = [
        "first-year",
        "second-year",
        "third-year",
        "fourth-year",
        "graduated",
    ];
    if (currentDate.getMonth() < startMonthIndex) collegeYear--;
    if (collegeYear < 4)
        collegeYearElement.innerText = displayText[collegeYear];
    else collegeYearElement.innerText = displayText[4];
}

export function setCopyrightYear(
    copyrightYearElement: HTMLElement | null
): void {
    if (!copyrightYearElement) return;
    const currentDate = new Date();
    copyrightYearElement.innerText = currentDate.getFullYear().toString();
}
