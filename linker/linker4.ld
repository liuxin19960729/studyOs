例：
    ENTRY(main)
    INPUT(tool.o tool_base.o)
    STARTUP(app.o)
    OUTPUT(app)

    SECTIONS
    {
    . = 0x400000;
    .text : { *(.text) }
    . = 0x8000000;
    .data : { *(.data) }
    . = 0xc000000;
    .bss : { *(.bss) }

    _bss_end = (. + 0x20000 - 1) / 0x20000 * 0x20000;
    }

    . :表示的是当前位置的计数器

    

