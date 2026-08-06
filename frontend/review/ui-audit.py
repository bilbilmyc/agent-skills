from pathlib import Path

FORBIDDEN = [
    "sidebar",
    "dashboard",
    "fixed 1440",
    "height: 900",
]


def audit(path: str):
    text = Path(path).read_text()
    return [item for item in FORBIDDEN if item.lower() in text.lower()]


if __name__ == "__main__":
    import sys
    print(audit(sys.argv[1]))
