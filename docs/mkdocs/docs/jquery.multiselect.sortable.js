/*	__________ ____ ___  ___________________.___  _________ ___ ___  
	\______   \    |   \/  _____/\_   _____/|   |/   _____//   |   \ 
	 |    |  _/    |   /   \  ___ |    __)  |   |\_____  \/    ~    \
	 |    |   \    |  /\    \_\  \|     \   |   |/        \    Y    /
	 |______  /______/  \______  /\___  /   |___/_______  /\___|_  / 
			\/                 \/     \/                \/       \/  	
						www.bugfish.eu
					
	Bugfish jQuery Sortselect Plugin
	Copyright 2025 Jan-Maurice "Bugfish" Dahlmanns

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
	and associated documentation files (the “Software”), to deal in the Software without 
	restriction, including without limitation the rights to use, copy, modify, merge, publish, 
	distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom 
	the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or 
	substantial portions of the Software.

	THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
	BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
	DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function($) {

  $.fn.bugfish_sortselect = function(options) {
    const defaults = {
      selectable: {
        title: '<b>Inaktiv</b>',
        sortable: true
      },
      selection: {
        title: '<b>Aktiv</b>',
        sortable: true
      },
      reverse: true,
      rid: 10
    };

    const settings = $.extend(true, {}, defaults, options);

    return this.each(function() {
      const $originalSelect = $(this);
      const selectName = $originalSelect.attr('name') || '';
      const selectClasses = $originalSelect.attr('class') || '';
      const parent = $originalSelect.parent();

      // Create hidden multiple select
      const $hiddenSelect = $('<select multiple>')
        .attr('name', `${selectName}[]`)
        .addClass(selectClasses)
        .css('display', 'none');

      // Copy data attributes from original select to hidden select
      $.each($originalSelect.data(), (key, value) => {
        $hiddenSelect.attr(`data-${key}`, value);
      });

      // Disable and hide original select
      $originalSelect.prop('disabled', true).removeClass().addClass('multiselect_sortable_hide');

      // Prepare selectable and selected lists' HTML
      let selectableItemsHTML = '';
      let selectedItemsHTML = '';

      $originalSelect.find('option').each((_, option) => {
        const $option = $(option);
        const name = $option.html();
        const value = $option.val();
        const selected = $option.is(':selected');
        const disabled = $option.is(':disabled');
        const dataAttributes = $option.data();
        const uniqueId = `id${Math.floor(Math.random() * 999)}`;

        $option.attr('data-unit_id', uniqueId);

        // Build string of data attributes for the item elements
        let dataAttrString = '';
        for (const key in dataAttributes) {
          if (dataAttributes.hasOwnProperty(key)) {
            dataAttrString += `data-${key}="${dataAttributes[key]}" `;
          }
        }

        const liClasses = `select_li_${settings.rid}` + (disabled ? ' disabled' : '');
        const liHTML = `<li class="${liClasses.trim()}" data-uniq_id="${uniqueId}" data-name="${name}" data-value="${value}" ${dataAttrString.trim()}>${name}</li>`;

        if (selected) {
          selectedItemsHTML += liHTML;
        } else {
          selectableItemsHTML += liHTML;
        }
      });

      // Build main content HTML with selectable and selection columns swapped if reverse is false
      const content = settings.reverse ? `
        <div class="multiselect_sortable_content multiselect_sortable_content_${settings.rid}">
          <div class="multiselect_sortable_content_selectable multiselect_sortable_content_selectable_${settings.rid}">
            <div class="selectable_title_${settings.rid}">${settings.selectable.title}</div>
            <ul class="selectable_content selectable_content_${settings.rid}">
              ${selectableItemsHTML}
            </ul>
          </div>
          <div class="multiselect_sortable_content_selection multiselect_sortable_content_selection_${settings.rid}">
            <div class="selection_title_${settings.rid}">${settings.selection.title}</div>
            <ul class="selection_content selection_content_${settings.rid} sortable sortable_${settings.rid}">
              ${selectedItemsHTML}
            </ul>
          </div>
        </div>
      ` : `
        <div class="multiselect_sortable_content multiselect_sortable_content_${settings.rid}">
          <div class="multiselect_sortable_content_selection multiselect_sortable_content_selection_${settings.rid}">
            <div class="selection_title_${settings.rid}">${settings.selection.title}</div>
            <ul class="selection_content selection_content_${settings.rid} sortable sortable_${settings.rid}">
              ${selectedItemsHTML}
            </ul>
          </div>
          <div class="multiselect_sortable_content_selectable_${settings.rid}">
            <div class="selectable_title_${settings.rid}">${settings.selectable.title}</div>
            <ul class="selectable_content_${settings.rid}">
              ${selectableItemsHTML}
            </ul>
          </div>
        </div>
      `;

      // Append content and hidden select to parent
      parent.append(content);
      parent.append($hiddenSelect);

      // Event delegation for click on selectable items -> move to selection
      $(document).off('click.bugfish_sortselect', `.selectable_content_${settings.rid} .select_li_${settings.rid}:not(.disabled)`);
      $(document).on('click.bugfish_sortselect', `.selectable_content_${settings.rid} .select_li_${settings.rid}:not(.disabled)`, function() {
        const $item = $(this);
        $('.selection_content_' + settings.rid).append($item);
        updateHiddenSelect();
      });

      // Event delegation for click on selected items -> move back to selectable
      $(document).off('click.bugfish_sortselect', `.selection_content_${settings.rid} .select_li_${settings.rid}:not(.disabled)`);
      $(document).on('click.bugfish_sortselect', `.selection_content_${settings.rid} .select_li_${settings.rid}:not(.disabled)`, function() {
        const $item = $(this);
        $('.selectable_content_' + settings.rid).append($item);
        updateHiddenSelect();
      });

      // Make sortable if enabled
      if (settings.selectable.sortable) {
        $('.sortable_' + settings.rid).sortable({
          connectWith: '.sortable_' + settings.rid,
          axis: 'y',
          start: () => updateHiddenSelect(),
          change: () => updateHiddenSelect(),
          update: () => updateHiddenSelect()
        });
      }

      // Initial update of hidden select options
      updateHiddenSelect();

      // Function to synchronize hidden select options with selected list
      function updateHiddenSelect() {
        $hiddenSelect.empty();

        $('.selection_content_' + settings.rid + ' .select_li_' + settings.rid).each(function() {
          const $li = $(this);
          const val = $li.data('value');
          if (val !== undefined) {
            const $opt = $('<option>')
              .val(val)
              .text(val)
              .prop('selected', true);
            $hiddenSelect.append($opt);
          }
        });
      }
    });
  };

})(jQuery);
