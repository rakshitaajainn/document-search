def search_keyword(document, keyword):
    """
    Search a keyword inside the extracted document.
    """

    results = []

    keyword = keyword.lower()

    for page, text in document.items():

        if not text:
            continue

        lower_text = text.lower()

        if keyword in lower_text:

            results.append({
                "page": page,
                "count": lower_text.count(keyword)
            })

    return results