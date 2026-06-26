import pdfplumber


def extract_pdf_text(pdf_path):
    """
    Reads a PDF and extracts text page by page.

    Parameters:
        pdf_path (str): Path of the uploaded PDF.

    Returns:
        dict: Page number -> extracted text
    """

    pages = {}

    with pdfplumber.open(pdf_path) as pdf:

        for page_number, page in enumerate(pdf.pages, start=1):

            text = page.extract_text()

            pages[page_number] = text if text else ""

    return pages