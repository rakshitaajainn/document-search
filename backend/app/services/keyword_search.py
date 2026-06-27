def search_keyword(document, keyword):
    """
    Search for a keyword in the extracted document and
    return page number, match count, and a text snippet.
    """

    results = []

    keyword = keyword.lower()

    for page, text in document.items():

        if not text:
            continue

        lower_text = text.lower()

        if keyword in lower_text:

            count = lower_text.count(keyword)

            # Find the first occurrence
            index = lower_text.find(keyword)

            # Create a snippet around the keyword
            start = max(0, index - 40)
            end = min(len(text), index + len(keyword) + 60)

            snippet = text[start:end]

            results.append({
                "page": page,
                "count": count,
                "snippet": snippet
            })

    return results