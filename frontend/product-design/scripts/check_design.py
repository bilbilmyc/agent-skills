#!/usr/bin/env python3
"""Simple frontend design rule checker."""

from pathlib import Path

FORBIDDEN = [
    "sidebar",
    "dashboard",
    "breadcrumb",
    "admin template",
]


def check(path: str) -> int:
    text = Path(path).read_text(encoding="utf-8").lower()
    errors = [item for item in FORBIDDEN if item in text]
    for error in errors:
        print(f"forbidden pattern: {error}")
    return 1 if errors else 0


if __name__ == "__main__":
    import sys
    raise SystemExit(check(sys.argv[1]))
