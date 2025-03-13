export function validateForm(data) {
    const errors = [];

    // Book Title Validation
    if (!data.bookTitle || data.bookTitle.trim() === "")
    {
        errors.push("Please input a title for the book.");
    }

    // Book Comments Validation
        // Comments may  be empty

    // Book Rating Validation
    if (data.bookRating === "none")
    {
        errors.push("Please select a rating for the book.");
    }
    else
    {
        const validOptions = ["One Star", "Two Stars", "Three Stars", "Four Stars", "Five Stars"];
        if (!validOptions.includes(data.bookRating))
        {
            errors.push("Spoofer no spoofing!");
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}